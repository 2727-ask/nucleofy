(async function () {
    function extractProfileData() {
      const profiles = document.querySelectorAll(".uds-person-profile");
      const data = [];
  
      profiles.forEach(profile => {
        const imgElement = profile.querySelector(".profile-img-placeholder img");
        const nameElement = profile.querySelector(".person-name") ||  profile.querySelector(".person-name a");
        const professionElement = profile.querySelector(".person-profession h4");
        const emailElement = profile.querySelector(".person-contact-info a");
        const descriptionElement = profile.querySelector(".person-description");
  
        const profileData = {
          image: imgElement?.src || "",
          name: nameElement?.textContent || "",
          profileLink: nameElement?.href || "",
          profession: professionElement?.textContent || "",
          email: emailElement?.textContent || "",
          description: descriptionElement?.textContent || "",
        };
  
        data.push(profileData);
      });
  
      return data;
    }
  
    async function sendProfilesToAPI(profiles) {
      try {
        const response = await fetch("http://localhost:3000/save-profiles", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(profiles),
        });
  
        if (response.ok) {
          const result = await response.json();
          console.log("Profiles saved successfully:", result);
          alert("Profiles saved successfully! Check server logs for details.");
        } else {
          console.error("Failed to save profiles:", response.statusText);
          alert("Failed to save profiles. Check console for details.");
        }
      } catch (error) {
        console.error("Error while sending profiles to API:", error);
        alert("Error occurred while sending profiles to API. Check console for details.");
      }
    }
  
    const profiles = extractProfileData();
    if (profiles.length > 0) {
      await sendProfilesToAPI(profiles);
    } else {
      alert("No profiles found on the page.");
    }
  })();
  