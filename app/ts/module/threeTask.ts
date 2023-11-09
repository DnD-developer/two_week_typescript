import CommentsData from "../interfaces/threeTask"

const getData = async (customUrl: URL): Promise<CommentsData[]> => {
	const response = await fetch(customUrl)
	const result = (await response.json()) as Promise<CommentsData[]>
	return result
}

export default getData
