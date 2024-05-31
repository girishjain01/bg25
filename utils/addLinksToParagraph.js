const links = require('../links.json');

function addLinksToParagraph(paragraph) {
  if (!paragraph) return paragraph;

  let updatedParagraph = paragraph;
  for (const [key, value] of Object.entries(links)) {
    const regex = new RegExp(`(${key})`, 'g');
    updatedParagraph = updatedParagraph.replace(regex, `<a href="${value}" target="_blank">${key}</a>`);
  }
  return updatedParagraph;
}

module.exports = addLinksToParagraph;
