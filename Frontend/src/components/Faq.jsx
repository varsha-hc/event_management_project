import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Container } from 'react-bootstrap';

export default function EventFAQs() {
  return (
    <Container fluid style={{ textAlign: "left", backgroundColor: "whitesmoke", padding: "20px" }}>
      <Typography variant="h6" style={{ marginBottom: "20px" }}>Frequently Asked Questions</Typography>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography variant="h6"><b>How early should I start planning my event?</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            It is recommended to start planning your event at least 6-12 months in advance, especially for larger events. This allows ample time for venue booking, vendor selection, and logistics planning.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography variant="h6"><b>What types of events do you manage?</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We specialize in corporate events, conferences, weddings, parties, product launches, and more. Our team is versatile and can tailor our services to meet your specific event needs.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography variant="h6"><b>Can you help with event permits and legal requirements?</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, we can assist you in obtaining necessary permits and ensuring compliance with local regulations. We work closely with authorities to ensure all legal aspects of your event are covered.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4-content"
          id="panel4-header"
        >
          <Typography variant="h6"><b>What is your approach to budget management?</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We prioritize transparent budgeting and provide detailed cost breakdowns for all aspects of your event. Our goal is to maximize value while staying within your budgetary constraints.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5-content"
          id="panel5-header"
        >
          <Typography variant="h6"><b>How do you handle unexpected issues or emergencies during an event?</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Our team is experienced in crisis management and contingency planning. We have protocols in place to address emergencies swiftly and minimize disruption to your event.
          </Typography>
        </AccordionDetails>
      </Accordion>

    </Container>
  );
}
