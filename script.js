<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vote Citoyen - UtopIA</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <nav class="navbar">
        <img src="logo.png" alt="Logo" class="logo"> <!-- Ajoutez ceci pour le logo -->

        <ul>
            <li><a href="index.html">Accueil</a></li>
            <li><a href="vote.html">Vote citoyen</a></li>
            <li><a href="blockchain.html">Portefeuille Blockchain</a></li>
            <li><a href="carte.html">Carte Interactive</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>

    <header>
        <h1>Système de Vote Citoyen</h1>
    </header>

    <section class="section">
        <div class="content">
            <h2>Exprimez votre opinion</h2>
            <p>Sur les questions importantes.</p>
            <div class="vote-container">
                <div class="vote-card">
                    <h3>Référendum sur l'énergie verte</h3>
                    <p>Êtes-vous favorable à une transition complète vers les énergies renouvelables d'ici 2030 ?</p>
                    <button class="vote-button yes-button">Oui</button>
                    <button class="vote-button no-button">Non</button>
                    <div class="message" id="message" style="display: none;"></div> <!-- Zone pour le message -->
                </div>
                <div class="vote-card">
                    <h3>Réforme de l'éducation</h3>
                    <p>Approuvez-vous la réforme visant à intégrer l'IA dans les écoles publiques ?</p>
                     <button class="vote-button yes-button">Oui</button>
                    <button class="vote-button no-button">Non</button>
                    <div class="message" id="message" style="display: none;"></div> <!-- Zone pour le message -->
                </div>
            </div>
        </div>
    </section>

    <!-- Chatbot Icon -->
    <div id="chatbot-icon">
        <img src="chatbot-icon.png" alt="Chatbot" class="chatbot-icon">
    </div>

      <!-- Chatbot Window -->
      <div id="chatbot-window" class="chatbot-window hidden">
        <div class="chatbot-header">
            <h3>Assistant Citoyen</h3>
            <button class="close-btn" onclick="closeChatbot()">X</button>
        </div>
        <div class="chatbot-content">
            <div class="chatbot-messages"></div>
        </div>
        <div class="chatbot-footer">
            <input type="text" class="chatbot-input" placeholder="Écrivez votre message...">
            <button class="send-btn">Envoyer</button>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
