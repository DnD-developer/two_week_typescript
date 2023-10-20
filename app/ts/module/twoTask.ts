// interfaces
import Post, { NormilizePosts } from "../interfaces/twoTask"

const posts: Post[] = [
	{
		id: "62e69d5a5458aac0ed320b35",
		title: "id labore ex et quam laborum",
		body: "laudantium enim quasi est quidem magnam voluptate ipsam eostempora quo necessitatibusdolor quam autem quasireiciendis et nam sapiente accusantium"
	},
	{
		id: "62e69d5a5458aac0ed320b1c",
		title: "quo vero reiciendis velit similique earum",
		body: "est natus enim nihil est dolore omnis voluptatem numquamet omnis occaecati quod ullam at voluptatem error expedita pariaturnihil sint nostrum voluptatem reiciendis et"
	},
	{
		id: "62e69d5a5458aac0ed320b32",
		title: "odio adipisci rerum aut animi",
		body: "quia molestiae reprehenderit quasi aspernaturaut expedita occaecati aliquam eveniet laudantiumomnis quibusdam delectus saepe quia accusamus maiores nam estcum et ducimus et vero voluptates excepturi deleniti ratione"
	},
	{
		id: "62e69d5a5458aac0ed320b39",
		title: "alias odio sit",
		body: "non et atqueoccaecati deserunt quas accusantium unde odit nobis qui voluptatemquia voluptas consequuntur itaque doloret qui rerum deleniti ut occaecati"
	},
	{
		id: "62e69d5a5458aac0ed320b53",
		title: "vero eaque aliquid doloribus et culpa",
		body: "harum non quasi et rationetempore iure ex voluptates in rationeharum architecto fugit inventore cupiditatevoluptates magni quo et"
	},
	{
		id: "62e69d5a5458aac0ed320b19",
		title: "et fugit eligendi deleniti quidem qui sint nihil autem",
		body: "doloribus at sed quis culpa deserunt consectetur qui praesentiumaccusamus fugiat dictavoluptatem rerum ut voluptate autemvoluptatem repellendus aspernatur dolorem in"
	},
	{
		id: "62e69d5a5458aac0ed320b25",
		title: "repellat consequatur praesentium vel minus molestias voluptatum",
		body: "maiores sed dolores similique labore et inventore etquasi temporibus esse sunt id eteos voluptatem aliquamratione corporis molestiae mollitia quia et magnam dolor"
	}
]

const normalizeData = (unnormalizedData: Post[]): NormilizePosts => {
	const emptyNormilizePosts: NormilizePosts = {
		byId: {},
		allIds: []
	}

	unnormalizedData.forEach(post => {
		emptyNormilizePosts.byId[post.id] = post
		emptyNormilizePosts.allIds.push(post.id)
	})

	return emptyNormilizePosts
}

const resultTwoTask = normalizeData(posts)

export default resultTwoTask
