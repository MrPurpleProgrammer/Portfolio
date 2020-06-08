
let uploadInputFields = (fieldName) => {
  let inputDict = {
    toolbarMediaUpload: "novel_media",
    uploadFormEvidence: "media_evidence",
  }
  return inputDict[fieldName]; 
}

module.exports = {
    uploadInputFields,
}