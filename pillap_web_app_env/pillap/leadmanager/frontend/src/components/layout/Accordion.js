import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function SimpleAccordion() {

  const styles = {
    faq_text : {
      textAlign: "justify", 
      paddingLeft: "2%", 
      paddingRight: "2%"
    }
  }

  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
      setIsActive(current => !current);
    };


  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          
          <Typography style={{fontWeight: isActive ? 'bold' : ''}} onClick={handleClick}>Wann wird das Pillap erhältlich sein?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={styles.faq_text}>
            Die Vorbereitungen für ein markttaugliches Produkt, das unseren Ansprüchen gerecht wird, laufen. Melde dich für unseren Newsletter an, um nichts mehr zu verpassen. Sobald die innovativste Laptoptasche auf dem Markt erhältlich ist, informieren wir dich umgehend.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography style={{fontWeight: isActive ? 'bold' : ''}} onClick={handleClick}>Ist das Pillap für alle Laptop Größen verfügbar?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={styles.faq_text}>
          Ja, wir bieten für alle Formate von Laptops und Tablets die passende Tasche, damit dein Gerät sicher verpackt ist.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography style={{fontWeight: isActive ? 'bold' : ''}} onClick={handleClick}>Kann ich das Design vom Pillap verändern?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={styles.faq_text}>
          Konfiguriere dein Pillap so, dass es perfekt zu dir passt. Entscheide über Farbe, Größe und Ausstattung. Wir prüfen aktuell auch die persönliche Individualisierbarkeit mit Bestickungen oder Bedruckungen mit deinem Namen oder anderen Texten und Bildern. 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography style={{fontWeight: isActive ? 'bold' : ''}} onClick={handleClick}>Wie viel wird ein Pillap kosten?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={styles.faq_text}>
          Die Standardversion mit Grundausstattung wird es schon ab 30 € geben. Je nach Zubehör erhöht sich der Preis. Uns ist es wichtig, unseren Kunden einen fairen Preis zu bieten, damit sich auch Zielgruppen, wie Studenten und Schülern ein Pillap leisten können und bequem im Unterricht sitzen können.           </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography style={{fontWeight: isActive ? 'bold' : ''}} onClick={handleClick}>Was ist das Baukastensystem?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={styles.faq_text}>
          Durch unser Baukastensystem kannst du dir dein Pillap so konfigurieren, wie du möchtest. Du zahlt so nur für Bestandteile, die du wirklich brauchen kannst. Brauchst du beim Kauf zum Beispiel noch keinen GPS-Tracker, kannst du ganz einfach zu einem späteren Zeitpunkt einen dazukaufen. So bist du maximal flexibel.          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography style={{fontWeight: isActive ? 'bold' : ''}} onClick={handleClick}>Was macht das Pillap einzigartig?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={styles.faq_text}>
          Neben der Flexibilität durch unser Baukastensystem, ist vor allem die Kombination aus Sitzpolster und Laptoptasche unser USP 
          </Typography>        
          </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography style={{fontWeight: isActive ? 'bold' : ''}} onClick={handleClick}>Inwiefern ist das Pillap nachhaltig?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={styles.faq_text}>
          Wir achten auf eine verantwortungsvolle Herstellungen und Logistik. Das Pillap und dessen Verpackung soll zu 100 % ohne Plastik auskommen. </Typography>     </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography style={{fontWeight: isActive ? 'bold' : ''}} onClick={handleClick}>Kann man im Anschluss an den Pillap Kauf, weiteres Zubehör bestellen?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={styles.faq_text}>
          Ja, wir bieten dir die maximale Flexibilität. Zubehör, wie der GPS-Tracker, Erweiterungsfach können ganz einfach zu einem späteren Zeitpunkt zur Laptoptasche dazugekauft werden.           </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography style={{fontWeight: isActive ? 'bold' : ''}} onClick={handleClick}>Wie kann ich Kontakt mit euch aufnehmen?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={styles.faq_text}>
          Mit dem Kontaktformular kannst du Fragen, Wünsche und Anregungen an uns schicken. Wir melden uns dann bei dir. </Typography>        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography style={{fontWeight: isActive ? 'bold' : ''}} onClick={handleClick}>Kann ich mich auf die Tasche setzen, wenn mein Laptop oder Tablet darin ist?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={styles.faq_text}>
          Aktuell können wir noch nicht zu 100% garantieren, dass das Gerät diese Belastung aushält, da Geräte unterschiedlich stabil gebaut sind und Menschen die Tasche unterschiedlich belasten. Wir führen aber aktuell Belastungstests durch.</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}