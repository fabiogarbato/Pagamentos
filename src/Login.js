import React, { useState, useEffect  } from 'react';
import { Container, Row, Col, Form, Button, Card, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';
import NavBar from './Navbar';
import { useNavigate } from 'react-router-dom';
import { API_BASE_URL } from './config';
import {showMessageSuccess, showMessageError} from './utils.js';
import { useAuth } from './AuthProvider';

const Login = () => {

    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate();
    const { setIsAuthenticated } = useAuth();
    const [showModal, setShowModal] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
    
        try {
            const response = await fetch(`${API_BASE_URL}/auth/login`, { 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ usuario, senha })
            });
    
            if (response.ok) {
                showMessageSuccess("Usuário Logado!");
                navigate('/Home');
                setIsAuthenticated(true);
                localStorage.setItem('isAuthenticated', 'true');
            } else {
                const data = await response.json();
                showMessageError(data.message);
            }
    
        } catch (error) {
            console.error('Erro na solicitação:', error);
        }
    };
    
    const handleShowModal = () => {
        setSenha(''); 
        setUsuario(''); 
        setShowModal(true);
      };
      
    const handleCloseModal = () => {
        setSenha(''); 
        setUsuario(''); 
        setShowModal(false);
      };
  
    const handleRegister = async (event) => {
      event.preventDefault();
      
      try {
        const response = await fetch(`${API_BASE_URL}/auth/register`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ usuario: usuario, senha: senha })
        });
  
        if (response.ok) {
            showMessageSuccess("Usuário registrado com sucesso!");
        } else {
            showMessageError("Erro ao registrar o usuário!");
        }
        handleCloseModal();
      } catch (error) {
        console.error('Erro na solicitação:', error);
      }
    };

    useEffect(() => {
        document.body.style.overflowY = 'hidden';
        return () => {
          document.body.style.overflowY = 'auto';
        };
      }, []);

  return (
    <Container fluid>
        <NavBar title="Pagamentos" />
        <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "60vh"}}>
            <Card className="p-5" style={{ backgroundColor:'#386dbd'}}> 
            <Row className="justify-content-md-center">
                <Col md={12}>
                <h1 className="text-center mb-4">Login</h1>
                <Form onSubmit={handleLogin}>
                    <Form.Group controlId="formUsuario" className="mb-3">
                    <Form.Label style={{ fontFamily: 'Fira Sans Condensed', fontWeight: 'bold', fontSize:'20px' }}>Usuário</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Digite seu usuário"
                        value={usuario}
                        onChange={(e) => setUsuario(e.target.value)}
                    />
                    </Form.Group>
                    <Form.Group controlId="formSenha" className="mb-3"> 
                    <Form.Label style={{ fontFamily: 'Fira Sans Condensed', fontWeight: 'bold', fontSize:'20px' }}>Senha</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Digite sua senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                    />
                    </Form.Group>
                    <div className="d-flex justify-content-center"> 
                    <Button variant="success" type="submit" style={{backgroundColor:'#009ddd'}}>
                        Entrar
                    </Button>
                    </div>
                </Form>
                </Col>
            </Row>
            </Card>
        </Container>
        <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Button variant="primary" type="submit" onClick={handleShowModal}>
                Primeiro Acesso
            </Button>

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Registrar Novo Usuário</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form onSubmit={handleRegister}>
                    <Form.Group controlId="formUsername">
                        <Form.Label>Usuário</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Digite o usuário"
                            value={usuario}
                            onChange={(e) => setUsuario(e.target.value)} 
                            autoComplete="new-username"
                        />
                    </Form.Group>

                    <Form.Group controlId="formPassword">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control 
                            type="password" 
                            placeholder="Senha"
                            value={senha}
                            className='mb-4'
                            onChange={(e) => setSenha(e.target.value)} 
                            autoComplete="new-password"
                        />
                    </Form.Group>
                    <Button variant="success" type="submit">
                        Registrar
                    </Button>
                </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleCloseModal}>
                        Fechar
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
        <Footer/>
    </Container>
  );
}

export default Login;