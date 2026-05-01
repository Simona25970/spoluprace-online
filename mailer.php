<?php
// Načítá pole z formuláře - name, email a message; odstraňuje bílé znaky; odstraňuje HTML
$name = strip_tags(trim($_POST["name"]));
$name = str_replace(array("\r","\n"),array(" "," "),$name);
$email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
$phone = trim($_POST["phone"]);
$message = trim($_POST["message"]);

// Kontroluje data popř. vrátí chybu
if (empty($name) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    header('Content-Type: application/json');
    echo json_encode(['success' => false, 'message' => 'Chyba při odeslání. Zkuste znovu']);
    exit;
}

// Nastavte si email, nakterý chcete, aby se vyplněný formulář odeslal - jakýkoli váš email
$recipient = "simonapracezdomova@seznam.cz";

// Nastavte předmět odeslaného emailu
$subject = "Máte nový kontakt od: $name";

// Obsah emailu, který se vám odešle
$email_content = "Jméno: $name\n";
$email_content .= "Email: $email\n\n";
$email_content .= "Telefon: $phone\n\n";
$email_content .= "Zpráva:\n$message\n";

// Emailová hlavička
$email_headers = "From: $name <$email>";

// Odeslání emailu
if (mail($recipient, $subject, $email_content, $email_headers)) {
    header('Content-Type: application/json');
    echo json_encode(['success' => true, 'message' => 'Děkuji za zprávu. Ozvu se Vám co nejdříve.']);
} else {
    header('Content-Type: application/json');
    echo json_encode(['success' => false, 'message' => 'Odeslání se nepovedlo. Zkuste to prosím znovu.']);
}
?>