export default interface Post {
	id: string
	title: string
	body: string
}

export interface NormilizePosts {
	byId: {
		[id: string]: Post
	}
	allIds: string[]
}
