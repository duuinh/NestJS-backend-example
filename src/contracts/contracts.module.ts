import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ContractsService } from './contracts.service';
import { ContractsController } from './contracts.controller';

@Module({
  controllers: [ContractsController],
  providers: [ContractsService],
  imports: [PrismaModule],
})
export class ContractsModule {}
