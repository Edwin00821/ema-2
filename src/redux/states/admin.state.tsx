import { createSlice } from '@reduxjs/toolkit'
import { IMAdminRes } from '@/interfaces'

export const AdminEmptyState: IMAdminRes = {
  isLogued: false,
  num_empleado: '',
  user: {
    correo_user: '',
    img_user: '',
    rol: {
      id_rol: 0,
      tipo_rol: '',
      valida_rol: 1
    },
    persona: {
      id_per: 0,
      nombre_per: '',
      appat_per: '',
      apmat_per: '',
      fecha_de_nacimiento_per: '',
      genero: {
        id_gen: 0,
        tipo_gen: '',
        valida_gen: 1
      },
      inteligencia: {
        id_int: 0,
        tipo_int: '',
        valida_int: 1
      },
      valida_per: 1
    },
    valida_user: 1
  },
  valida_adm: 1
}

interface ActionAdmin {
  payload: IMAdminRes
  type: string
}

export const adminSlice = createSlice({
  name: 'admin',
  initialState: AdminEmptyState,
  reducers: {
    createAdmin: (state, action: ActionAdmin) => (state = action.payload),
    updeteAdmin: (state, action: ActionAdmin) => ({
      ...state,
      ...action.payload
    }),
    deleteAdmin: (state) => (state = AdminEmptyState)
  }
})

export const { createAdmin, updeteAdmin, deleteAdmin } = adminSlice.actions

export default adminSlice.reducer
