const DivIconDice = document.querySelector('[data-js="DivIconDice"]');

const url = "https://api.adviceslip.com/advice";
const getAdvice = async () => (await fetch(url)).json();

const addAdviceInDom = async () => {
	const {advice, id} = await getAdvice().slip;

	const $adviceId = document.querySelector('[data-js="adviceId"]');
	const $advice = document.querySelector('[data-js="advice"]');

	$advice.textContent = `"${advice}"`;
	$adviceId.textContent = `ADVICE #${id}`;
};

addAdviceInDom();
DivIconDice.addEventListener("click", addAdviceInDom);
