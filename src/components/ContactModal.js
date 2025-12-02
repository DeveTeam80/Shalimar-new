// components/ContactModal.js
"use client";

import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Modal } from "react-bootstrap";

const VISIONARY_SCRIPT_SRC = "https://app.visionarybizz.com/js/form_embed.js";

export default function ContactModal({ show, handleClose }) {
  useEffect(() => {
    if (!show) return;

    const already = document.querySelector(`script[src="${VISIONARY_SCRIPT_SRC}"]`);
    if (already) {
      return;
    }

    const s = document.createElement("script");
    s.src = VISIONARY_SCRIPT_SRC;
    s.async = true;
    s.defer = true;
    s.id = "visionarybizz-form-embed";
    document.body.appendChild(s);
  }, [show]);

  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      size="lg"
      className="contact-modal"
    >
      <Modal.Header closeButton>
        <Modal.Title>
          <h3 className="mb-0">Get in Touch with Shalimar Farms</h3>
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div className="form-container">
          <iframe
            src="https://app.visionarybizz.com/widget/form/ztBqTdweXpqKb36xhTqq"
            style={{ 
              width: "100%", 
              height: "600px", 
              border: "none", 
              borderRadius: "8px" 
            }}
            id="inline-ztBqTdweXpqKb36xhTqq"
            data-layout='{"id":"INLINE"}'
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Enquiry Form"
            data-height="600"
            data-layout-iframe-id="inline-ztBqTdweXpqKb36xhTqq"
            data-form-id="ztBqTdweXpqKb36xhTqq"
            title="Enquiry Form"
          />
        </div>
      </Modal.Body>
    </Modal>
  );
}

ContactModal.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};