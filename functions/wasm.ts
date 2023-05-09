import add from '../public/_worker.js2/add.wasm'

export const onRequest = async  () => {
  const addModule = await WebAssembly.instantiate(add);
  return new Response(addModule.exports.add(1, 2).toString());
}