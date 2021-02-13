import { CriptoCoin } from '../Models/CriptoCoin'
import { User } from '../Models/User'

export interface ICriptoCurrenciesUseCase {
    registerUser(user: User): Promise<User>
    login(userName: string, password: string): Promise<User>
    getCriptoCurrencies(): Promise<CriptoCoin[]>
    getUserCurrencies(limit: number): Promise<CriptoCoin[]>
    addCurrencyToUser(currency: CriptoCoin): Promise<void>
    setPreferredCurrency(currency: CriptoCoin): Promise<void>
}