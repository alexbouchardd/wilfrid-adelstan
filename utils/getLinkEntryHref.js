const getLinkEntryHref = ({ fields }) => {
  if (fields.href) {
    return fields.href;
  }
  if (fields.linkToSection) {
    return `#${fields.linkToSection.fields.slug}`;
  }
  if (fields.fileLink) {
    return `https://${fields.fileLink.fields.file.url}`;
  }
  return "";
};

export default getLinkEntryHref;
