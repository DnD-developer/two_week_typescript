// modules
import totalPrice from "./module/firstTask"
import resultTwoTask from "./module/twoTask"
import getData from "./module/threeTask"
// interfaces
import CommentsData from "./interfaces/threeTask"

console.info(totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 }))
console.info(resultTwoTask)

const responseForLog: CommentsData[] = []
const COMMENTS_URL: string = "https://jsonplaceholder.typicode.com/comments"

getData(new URL(COMMENTS_URL))
	.then(data => {
		data.forEach(post => {
			responseForLog.push({ id: post.id, email: post.email })
		})

		responseForLog.forEach(post => console.log(post))
	})
	.catch(Error => console.error(Error))
