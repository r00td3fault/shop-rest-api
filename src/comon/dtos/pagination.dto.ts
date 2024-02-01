import { ApiProperty } from "@nestjs/swagger";

import { Type } from "class-transformer";
import { IsOptional, IsPositive, Min } from "class-validator";


export class PaginationDto {

    @ApiProperty({
        default: 10, description: 'Number of rows'
    })
    @IsOptional()
    @IsPositive()
    @Type(() => Number)
    limit?: number;

    @ApiProperty({
        default: 0, description: 'Number of skip rows'
    })
    @IsOptional()
    @IsPositive()
    @Min(0)
    @Type(() => Number)
    offset: number;
}