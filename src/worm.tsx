import React, { ReactElement, useCallback, useEffect, useRef } from 'react'
import Paper, { Path, Point, Color } from 'paper'

import useIsMounted from './hooks/useIsMounted'
import getRandomColor from './lib/getRandomColor'

const Worm = (): ReactElement => {
  const isMounted = useIsMounted()
  const pathRef = useRef<InstanceType<typeof Path>>()
  const points = 25
  const length = 35

  useEffect(() => {
    if (!Paper?.view) return
    return () => { Paper.view.remove() }
  }, [])

  const draw = useCallback(() => {
    // TO DO dont destructure
    const { current } = pathRef
    if (!current) return

    const start = Paper.view.center.divide(new Point(10, 1))

    for (let i = 0; i < points; i++) {
      current.add(start.add(new Point(i * length, 0)))
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Paper.view.onMouseMove = (event: any) => {
      if (!pathRef.current) return

      pathRef.current.firstSegment.point = event.point
      for (let i = 0; i < points - 1; i++) {
        const segment = pathRef.current.segments[i]
        const nextSegment = segment.next
        const vector = segment.point.subtract(nextSegment.point)
        vector.length = length
        nextSegment.point = segment.point.subtract(vector)
      }
      pathRef.current.smooth({ type: 'continuous' })
    }

    Paper.view.onMouseDown = () => {
      if (!pathRef.current) return
      pathRef.current.fullySelected = true
      pathRef.current.strokeColor = new Color(getRandomColor())
    }

    Paper.view.onMouseUp = () => {
      if (!pathRef.current) return
      pathRef.current.fullySelected = false
    }
  }, [])

  const setCanvasRef = useCallback(node => {
    if (node !== null) {
      Paper.setup(node)
      pathRef.current = new Path({
        strokeColor: getRandomColor(),
        strokeWidth: 20,
        strokeCap: 'round'
      })
      draw()
    }
  }, [draw])

  if (!isMounted) return <div></div>

  return (
    <div className="h-screen">
      <canvas className="h-screen w-full canvas-resize" ref={setCanvasRef} id="canvas" data-paper-resize="true" />
    </div>
  )
}

export default Worm
