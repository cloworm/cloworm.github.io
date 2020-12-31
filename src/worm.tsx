import React, { FunctionComponent, useCallback, useEffect, useRef } from 'react'
import Paper, { Path, Point, Color, Gradient, GradientStop } from 'paper'

import useIsMounted from './hooks/useIsMounted'

interface Props {
  light: string
  dark: string
}

const Worm: FunctionComponent<Props> = ({ light = '#F8E5EF', dark = '#FF6194' }) => {
  const isMounted = useIsMounted()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const pathRef = useRef<any>()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const canvasRef = useRef<any>()
  const points = 25
  const length = 35

  useEffect(() => {
    if (!Paper?.view) return
    return () => { Paper.view.remove() }
  }, [])

  useEffect(() => {
    if (!pathRef?.current && !canvasRef?.current) return

    const gradient = new Gradient()
    gradient.stops = [
      new GradientStop(new Color(light)),
      new GradientStop(new Color(dark))
    ]

    pathRef.current.strokeColor = {
      gradient,
      origin: [0, canvasRef.current.width],
      destination: [0, 0]
    }

  }, [light, dark])

  const draw = useCallback(() => {
    if (!pathRef?.current) return

    const start = Paper.view.center.divide(new Point(10, 1))

    for (let i = 0; i < points; i++) {
      pathRef.current.add(start.add(new Point(i * length, 0)))
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Paper.view.onMouseMove = (event: any) => {
      if (!pathRef?.current) return

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
  }, [])

  const setCanvasRef = useCallback(node => {
    if (node !== null) {
      canvasRef.current = node
      Paper.setup(node)
      pathRef.current = new Path({
        strokeColor: {
          gradient: {
            stops: [
              '#F8E5EF',
              '#FF6194',
            ]
          },
          origin: [0, node.width],
          destination: [0, 0]
        },
        strokeWidth: 20,
        strokeCap: 'round'
      })
      draw()
    }
  }, [draw])

  if (!isMounted) return <div></div>

  return (
    <div className="h-screen bg-gradient-to-b from-theme_oceanBlue to-theme_mediumPurple">
      <canvas className="h-screen w-full canvas-resize hidden sm-block" ref={setCanvasRef} id="canvas" data-paper-resize="true" />
    </div>
  )
}

export default Worm
