import Buffer from 'node:buffer'

export const onRequest = () => {
  return new Response(Buffer.from('Hello World!'))
}