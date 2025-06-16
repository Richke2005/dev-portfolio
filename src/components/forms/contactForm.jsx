"use client";
import React, {useState} from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from "../buttons/button.jsx";
import EmailService from "@/app/_lib/services/email.js"
import PropTypes from "prop-types";

export default function ContacForm({onChange}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <Box
      component="form"
      sx={{
        width: "100%",
        padding: 5,
        borderRadius: 5,
        display: 'flex',
        gap: 2,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: "space-around",
        backgroundColor: 'var(--layer1)',
        '& .MuiTextField-root': { 
          m: 1, 
          width: '100%',    
          borderRadius: 1 
        }, // Alterado para 100%
        '& .MuiFormLabel-root': { color: 'var(--foreground)' },
        '& .MuiInputBase-root': { color: 'var(--foreground)'},
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        label={"Nome"}
        type={"text"}
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder={"Digite seu nome"}
        variant="outlined"
        fullWidth={true}
        required={true}
      />
      <TextField
        label={"Email"}
        type={"email"}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={"Digite seu email"}
        variant="outlined"
        fullWidth={true}
        required={true}
      />
      <TextField
        label={"Mensagem"}
        type={"text"}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder={"Digite sua mensagem"}
        variant="outlined"
        fullWidth={true}
        multiline={true}
        maxRows={20}
        required={true}
      />
      <div style={{marginTop: "20px", width: "100%", display: "flex", justifyContent: "center" }}>
        <Button
        onClick={() =>{
          const emailService = new EmailService();
          emailService.emailFrom(name, email, message)
            .then(response => {
              alert("Email Enviado Com Sucesso!");
              setName('');
              setEmail('');
              setMessage('');
            })
            .catch(error => {
              alert.error("Error sending email:", error);
            });
        }}
        shape="contained"
        >Enviar</Button>
      </div>
    </Box>
  );
}
ContacForm.propTypes = {

}