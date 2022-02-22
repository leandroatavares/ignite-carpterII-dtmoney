import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import { Container } from './styles';

type NewTransactionModalOpen = {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalOpen) {
  
  return(
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      
      <Container>
        <button className="react-modal-close" type="button" onClick={onRequestClose}>
          <img src={closeImg} alt="Fechar modal" />
        </button>
        <h2>Cadastrar transação</h2>

        <input
          placeholder="Título"
        />
        <input
          type="number"
          placeholder="Valor"
        />
        <input
          placeholder="Categoria"
        />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  )
}