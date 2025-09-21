import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ExpensesService } from './expenses.service';
import { CreateExpenseDto } from 'src/dto/expenses.dto';
import { SimpleAuthGuard } from '../guard-expense/guard-expense.guard';
import { AdminGuard } from 'src/guard-expense/guard-header.guard';

@Controller('expenses')
@UseGuards(SimpleAuthGuard)
export class ExpensesController {
  constructor(private readonly expenseService: ExpensesService) {}

  @Post()
  @UseGuards(AdminGuard)
  create(@Body() expense: CreateExpenseDto) {
    return this.expenseService.create(expense);
  }

  @Get()
  @UseGuards(AdminGuard)
  getExpenses() {
    return this.expenseService.getAll();
  }

  @Put(':id')
  @UseGuards(AdminGuard)
  updateExpense(@Param('id') id: string, @Body() expense: CreateExpenseDto) {
    return this.expenseService.updateExpense(id, expense);
  }

  @Delete(':id')
  @UseGuards(AdminGuard)
  deleteExpense(@Param('id') id: string) {
    return this.expenseService.deleteExpense(id);
  }
}
