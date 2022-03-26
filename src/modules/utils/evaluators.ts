export const xpathEval = (expression: string, node: Node) =>{
	return document.evaluate(expression, node, null, XPathResult.ANY_TYPE, null);
};