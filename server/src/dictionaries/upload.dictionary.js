
let uploadInputFields = (fieldName) => {
  let inputDict = {
    toolbarMediaUpload: "fileUploads",
    uploadFormEvidence: "evidenceUploads",
  }
  return inputDict[fieldName]; 
}

module.exports = {
    uploadInputFields,
}