import { MinLength } from 'class-validator';

class CreateUserDto {
  @MinLength(3)
  name!: string;
}

export default CreateUserDto;
