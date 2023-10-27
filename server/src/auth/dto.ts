import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty } from 'class-validator'
// внутрь Dto я добавляю декораторы, для валидации данных 


export class SignUpDto {
	@ApiProperty({ example: 'test@gmail.com' })
	@IsEmail()
	email: string;

	@IsNotEmpty()
	@ApiProperty({ example: '1234' })
	password: string;

}

export class SignInDto {
	@ApiProperty({ example: 'test@gmail.com' })
	@IsEmail()
	email: string;

	@ApiProperty({ example: '1234' })
	@IsNotEmpty()
	password: string;
}

// export class SignOutDto { }
export class GetSessionInfoDto {

	@ApiProperty()
	id: number

	@ApiProperty()
	email: string;

	@ApiProperty({ description: 'issued at(когда выдан)' })
	iat: number

	@ApiProperty()
	exp: number
}