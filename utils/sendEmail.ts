import { emailFormData } from "@/types/email";

export function sendEmail(data: emailFormData) {
  const api = "/api/email";

  fetch(api, {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      alert(response.message);
    })
    .catch((err) => {
      alert(err);
    });
}
