create table public.pessoas(
	codigo serial primary key,
	nome varchar(255) not null,
	cpf char(11) not null,
	datanascimento date not null
);
create table public.endereços(
	codigo serial primary key,
	rua varchar(255) not null,
	bairro varchar(255) not null,
	numero char(11) not null,
	tipo varchar(255) not null,
	cidade varchar(255) not null,
	uf varchar(2) not null,
	cep char(8) not null
);
insert into public.endereços(rua,bairro,numero,tipo,cidade,uf,cep)
values('Rua Algarismo', 'Vila Beatriz', '36', 'Comercial', 'Nova Andradina', 'MS', '79750000'),
		('Rua Lua', 'Admira Ortega', '1102', 'Casa', 'Nova Londrina', 'SP', '87959008');

insert into public.pessoas(nome,cpf,datanascimanto)
values('tutu','33897658397','1948-03-03'),
      ('ju','92628467820','2008-01-10'),
	  ('jaao artur','26390827839','1938-04-09');