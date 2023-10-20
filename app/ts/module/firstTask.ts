// interfaces
import ParametresForTotalPrice from "../interfaces/firstTask"

const totalPrice = ({ price, discount, isInstallment, months }: ParametresForTotalPrice): number | never => {
	const priceWithDiscont = price * (100 - discount) * 0.01

	if (isInstallment && months < 2) {
		throw new Error("Если используется рассрочка, нужно указать количество месяцев не меньше 2-х")
	}

	if (isInstallment) {
		return priceWithDiscont / months
	}

	return priceWithDiscont
}

export default totalPrice
