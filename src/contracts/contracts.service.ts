import { Injectable } from '@nestjs/common';
import { Prisma, Contract } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ContractsService {
  constructor(private prisma: PrismaService) {}

  async contract(
    contractWhereUniqueInput: Prisma.ContractWhereUniqueInput,
  ): Promise<Contract | null> {
    return this.prisma.contract.findUnique({
      where: contractWhereUniqueInput,
    });
  }

  async contracts(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.ContractWhereUniqueInput;
    where?: Prisma.ContractWhereInput;
    orderBy?: Prisma.ContractOrderByWithRelationInput;
  }): Promise<Contract[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.contract.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createContract(data: Prisma.ContractCreateInput): Promise<Contract> {
    return this.prisma.contract.create({
      data,
    });
  }

  async updateContract(params: {
    where: Prisma.ContractWhereUniqueInput;
    data: Prisma.ContractUpdateInput;
  }): Promise<Contract> {
    const { where, data } = params;
    return this.prisma.contract.update({
      data,
      where,
    });
  }

  async deleteContract(
    where: Prisma.ContractWhereUniqueInput,
  ): Promise<Contract> {
    return this.prisma.contract.delete({
      where,
    });
  }
}
