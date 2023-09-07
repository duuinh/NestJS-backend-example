import {
  Controller,
  Get,
  Post,
  Req,
  Body,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Contract as ContractModel } from '@prisma/client';
import { ContractsService } from './contracts.service';
import { CreateContractDto } from './dto/create-contract.dto';

@ApiTags('Contracts')
@Controller('/v1/contracts')
export class ContractsController {
  constructor(private readonly contractsService: ContractsService) {}
  @ApiOperation({ summary: 'Get all contracts' })
  @Get('/')
  findAll(): Promise<ContractModel[]> {
    return this.contractsService.contracts({});
  }

  @Get('/:id')
  async getContractById(@Param('id') id: string): Promise<ContractModel> {
    return this.contractsService.contract({ id: id });
  }

  @Post('/')
  async createContract(
    @Body()
    contractData: CreateContractDto,
  ): Promise<ContractModel> {
    return this.contractsService.createContract(contractData);
  }

  @Delete('/:id')
  async deleteUser(@Param('id') id: string): Promise<ContractModel> {
    return this.contractsService.deleteContract({ id });
  }
}
