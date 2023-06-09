// import React, { useState } from "react";

// const Scan = () => {
//   const [scanId, setScanId] = useState("");

//   // Configuration de l'API Nessus
//   const apiURL = "https://<adresse_IP>:8834"; // Remplacez <adresse_IP> par l'adresse IP de votre serveur Nessus
//   const apiKey = "<votre_clé_API>"; // Remplacez <votre_clé_API> par votre clé d'API Nessus
//   const headers = {
//     "X-ApiKeys": apiKey,
//     "Content-Type": "application/json",
//   };

//   // Fonction de création d'un scan
//   const createScan = async (scanName, target) => {
//     const endpoint = "/scans";
//     const url = apiURL + endpoint;
//     const data = {
//       uuid: "",
//       settings: {
//         name: scanName,
//         enabled: false,
//         text_targets: target,
//         // Autres paramètres de configuration du scan
//       },
//     };

//     try {
//       const response = await axios.post(url, data, { headers });
//       if (response.status === 200) {
//         const newScanId = response.data.scan.id;
//         setScanId(newScanId);
//         console.log("Scan créé avec succès. ID du scan :", newScanId);
//       } else {
//         console.error(
//           "Erreur lors de la création du scan:",
//           response.status,
//           response.data
//         );
//       }
//     } catch (error) {
//       console.error("Erreur lors de la création du scan:", error);
//     }
//   };

//   // Fonction de lancement d'un scan
//   const launchScan = async () => {
//     const endpoint = `/scans/${scanId}/launch`;
//     const url = apiURL + endpoint;

//     try {
//       const response = await axios.post(url, {}, { headers });
//       if (response.status === 200) {
//         console.log("Scan lancé avec succès");
//       } else {
//         console.error(
//           "Erreur lors du lancement du scan:",
//           response.status,
//           response.data
//         );
//       }
//     } catch (error) {
//       console.error("Erreur lors du lancement du scan:", error);
//     }
//   };

//   // Fonction de récupération des résultats d'un scan
//   const getScanResults = async () => {
//     const endpoint = `/scans/${scanId}`;
//     const url = apiURL + endpoint;

//     try {
//       const response = await axios.get(url, { headers });
//       if (response.status === 200) {
//         const scanResults = response.data;
//         // Traitez les résultats du scan comme vous le souhaitez
//         console.log("Résultats du scan:", scanResults);
//       } else {
//         console.error(
//           "Erreur lors de la récupération des résultats du scan:",
//           response.status,
//           response.data
//         );
//       }
//     } catch (error) {
//       console.error(
//         "Erreur lors de la récupération des résultats du scan:",
//         error
//       );
//     }
//   };

//   return (
//   <div>
//     scan
//   </div>
//   );
// };

// export default Scan;
