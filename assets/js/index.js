"use strict";

const txtAvatar = document.getElementById('avatar');
const txtFullname = document.getElementById('fullname');
const txtSubheading = document.getElementById('subheading');
const txtDescription = document.getElementById('description');
const txtWebsite = document.getElementById('website');
const txtEmail = document.getElementById('email');
const txtTelp = document.getElementById('telp');
// const txtQualifications = document.getElementById('qualifications');
// const txtInterests = document.getElementById('interests');
// const txtReferences = document.getElementById('references');
const txtWorkExperience = document.getElementById('workExperience');
const txtEducation = document.getElementById('education');

(function () {
    txtAvatar.src = model_portfolio.get.elements.avatar();
    txtAvatar.alt = model_portfolio.get.elements.fullname();
    txtFullname.innerHTML = model_portfolio.get.elements.fullname();
    txtSubheading.innerHTML = model_portfolio.get.elements.subheading();
    txtDescription.innerHTML = model_portfolio.get.elements.description();

    txtWebsite.innerHTML = model_portfolio.get.elements.website();
    txtEmail.innerHTML = model_portfolio.get.elements.email();
    txtTelp.innerHTML = model_portfolio.get.elements.telp();

    // txtQualifications.innerHTML = model_portfolio.get.elements.qualifications();
    // txtInterests.innerHTML = model_portfolio.get.elements.interests();
    // txtReferences.innerHTML = model_portfolio.get.elements.references();

    txtWorkExperience.innerHTML = model_portfolio.get.elements.workExperience();

    txtEducation.innerHTML = model_portfolio.get.elements.education();
})();
