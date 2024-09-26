import {z} from 'zod';

const userNameRegex = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/gim;

export const signUpSchema = z.object({
    username: z.string().regex(userNameRegex, 'username inválido').toLowerCase(),
    fullName: z.string().min(3, 'nome muito curto').max(50, 'nome muito longo').transform(name => name.split(' ').map(word => word.charAt(0).toUpperCase() +  word.slice(1).toLowerCase()).join(' ')),
    email: z.string().email('email inválido'),
    password: z.string().min(6, 'senha deve ter pelo menos 6 caracteres'),
})

export type signUpSchemaType = z.infer<typeof signUpSchema>