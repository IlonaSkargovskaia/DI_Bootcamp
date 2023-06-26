// Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic location, job title.
// The function should display in the DOM a sentence like "You will be a <job title> in <geographic location>, and married to <partner's name> with <number of children> kids."

(function (childrensNum, partnerName, location, jobTitle) {
    return document.body.textContent = `You will be a ${jobTitle} in ${location}, and married to ${partnerName} with ${childrensNum} kids`
})(3, 'John', 'London', 'businessman');