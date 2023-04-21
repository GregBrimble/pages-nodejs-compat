export default {
	fetch(request) {
    const { pathname } = new URL(request.url)
    if (pathname === '/') {
      const a = 5
      return new Response(`${a  }` + this.fetch.toString())
    }

    return new Response((await import(`./${pathname.slice(1)}`)).value)
	},
};
