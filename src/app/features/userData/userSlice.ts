import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'

interface UserDataTypes {
  nome: string;
  email: string;
  senha: string;
  cpf: string;
  telefone: string;
  rua: string;
  numero: string;
  complemento: string;
  bairro: string;
  cep: string;
  cidade: string;
  estado: string;
}

interface UserDataState {
  data: UserDataTypes;
}

const initialState: UserDataState = {
  data: {
    nome: '',
    email: '',
    senha: '',
    cpf: '',
    telefone: '',
    rua: '',
    numero: '',
    complemento: '',
    bairro: '',
    cep: '',
    cidade: '',
    estado: ''
  }
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    insert: (state, action: PayloadAction<UserDataTypes>) => {
      state.data.nome = action.payload.nome;
      state.data.email = action.payload.email;
      state.data.senha = action.payload.senha;
      state.data.cpf = action.payload.cpf;
      state.data.telefone = action.payload.telefone;
      state.data.rua = action.payload.rua;
      state.data.numero = action.payload.numero;
      state.data.complemento = action.payload.complemento;
      state.data.bairro = action.payload.bairro;
      state.data.cep = action.payload.cep;
      state.data.cidade = action.payload.cidade;
      state.data.estado = action.payload.estado;
    },
  },
})

export const { insert } = counterSlice.actions

export const selectUserData = (state: RootState) => state.userData.data

export default counterSlice.reducer