import type { Load } from "@sveltejs/kit"

export const load: Load = async ({ fetch, url }) => {
	// const fetchUrl = url.href + "/related.json"
	// const res = await fetch(fetchUrl)

	// if (res.ok) {
	// 	const { projects } = await res.json()

	// 	return {
	// 		props: {
	// 			relatedProjects: projects
	// 		}
	// 	}
	// } else {

	// 	return {
	// 		status: res.status,
	// 		error: new Error("Failed to fetch " + fetchUrl)
	// 	}
	// }
	return true
}
