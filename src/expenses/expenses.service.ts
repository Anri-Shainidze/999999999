import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Expense } from 'src/schema/expense.schema';
import { Model } from 'mongoose';
import { CreateExpenseDto } from 'src/dto/expenses.dto';

@Injectable()
export class ExpensesService {

  
  constructor(
    @InjectModel(Expense.name) private expenseModule: Model<Expense>,
  ) {}
  async create(expense: CreateExpenseDto) {
    return this.expenseModule.create(expense);
  }
  async getAll() {
    return this.expenseModule.find();
  }
  async getById(id: string) {
    return this.expenseModule.findById(id);
  }
  async deleteExpense(id: string) {
    return this.expenseModule.findByIdAndDelete(id);
  }
  async updateExpense(id: string, expense: CreateExpenseDto) {
    return this.expenseModule.findByIdAndUpdate(id, expense);
  }

}
