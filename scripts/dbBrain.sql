
/***
 CRIAÇÃO DAS TABELAS DO BANCO DE DADOS
*/
-- tabela de estados 
create sequence seq_uf_id;
grant all on sequence seq_uf_id to public;

create table uf(
    uf_id integer not null default nextval('seq_uf_id'),
    uf_uf char(2) not null,
    uf_nome varchar(32) not null
);

alter table uf add constraint pk_uf_id primary key(uf_id);
grant all on uf to public;
create unique index uk_uf_uf on uf(uf_uf);

-- tabela de localidade
create sequence seq_loc_id;
grant all on sequence seq_loc_id to public;

create table localidade( 
    loc_id integer not null default nextval('seq_loc_id'),
    loc_nome varchar(32) not null,
    loc_uf integer not null references uf(uf_id)
);
alter table localidade add constraint pk_loc_id primary key(loc_id);
grant all on localidade to public;

-- tabela de culturas
create sequence seq_cul_id;
grant all on sequence seq_cul_id to public;

create table cultura(
   cul_id integer not null default nextval('seq_cul_id'),
   cul_nome varchar(32) not null,
   cul_ativa boolean default true not null
);

alter table cultura add constraint pk_cul_id primary key(cul_id);
grant all on cultura to public;

create unique index uk_cul_nome on cultura(cul_nome);

--tabela de produtor
create sequence seq_pro_id;
grant all on sequence seq_pro_id to public;

create table produtor(
    pro_id integer not null default nextval('seq_pro_id'),
    pro_nome varchar(100) not null,
    pro_fazenda varchar(100) not null,
    pro_localidade integer references localidade(loc_id),
    pro_cnpj_cpf varchar(14) not null,
    pro_area_agricultavel numeric(15,6),
    pro_area_vegetacao numeric(15,6),
    pro_area_total numeric(15,6)
);

alter table produtor add constraint pk_pro_id primary key(pro_id);
grant all on produtor to public;

-- tabela de culturas do produtor
create table produtor_cultura(
   proc_produtor integer not null references produtor(pro_id),
   proc_cultura integer not null references cultura(cul_id)
);

create unique index  uk_proc on produtor_cultura(proc_produtor, proc_cultura);
grant all on produtor_cultura to public;


/***
  REGISTROS BASES
*/

--Estados
	insert into uf(uf_nome, uf_uf) values
		('Acre','AC'),
		('Alagoas','AL'),
		('Amazonas','AM'),
		('Amapá','AP'),
		('Bahia','BA'),
		('Ceará','CE'),
		('Distrito Federal','DF'),
		('Espírito Santo','ES'),
		('Goiás','GO'),
		('Maranhão','MA'),
		('Minas Gerais','MG'),
		('Mato Grosso do Sul','MS'),
		('Mato Grosso','MT'),
		('Pará','PA'),
		('Paraíba','PB'),
		('Pernambuco','PE'),
		('Piauí','PI'),
		('Paraná','PR'),
		('Rio de Janeiro','RJ'),
		('Rio Grande do Norte','RN'),
		('Rondônia','RO'),
		('Roraima','RR'),
		('Rio Grande do Sul','RS'),
		('Santa Catarina','SC'),
		('Sergipe','SE'),
		('São Paulo','SP'),
		('Tocantins','TO');

--Cidades

DO $$
DECLARE id_pr integer;
begin

	id_pr = (select uf_id from uf where uf_uf = 'PR');

    insert into localidade(loc_nome, loc_uf) values 
       ('Curitiba', id_pr),
       ('Ponta Grossa', id_pr),
       ('Umuarama', id_pr),
       ('Toledo', id_pr),
       ('Londrina', id_pr),
       ('Guarapuava', id_pr),
       ('Foz do Iguaçu', id_pr),
       ('Colombo', id_pr),
       ('São José dos Pinhais', id_pr),
       ('Antonina', id_pr);
      
    id_pr = (select uf_id from uf where uf_uf = 'SC');

    insert into localidade(loc_nome, loc_uf) values 
       ('Joinvile', id_pr),
       ('Blumenau', id_pr),
       ('São José', id_pr),
       ('Chapecó', id_pr),
       ('Itajaí', id_pr),
       ('Criciúma', id_pr),
       ('Jaraguá do Sul', id_pr),
       ('Palhoça', id_pr),
       ('Lages', id_pr),
       ('Rio do Sul', id_pr);
      
  id_pr = (select uf_id from uf where uf_uf = 'RS');
  insert into localidade(loc_nome, loc_uf) values 
       ('Candas', id_pr),
       ('Porto Alegre', id_pr),
       ('Caixias do Sul', id_pr),
       ('Pelotas', id_pr),
       ('Santa Maria', id_pr),
       ('Gravatai', id_pr),
       ('Novo Hamburgo', id_pr),
       ('Viamão', id_pr),
       ('Passo Fundo', id_pr),
       ('São Leopoldo', id_pr);      
      
END$$;


--Cultura
insert into cultura(cul_nome) values
   ('Soja'),
   ('Milho'),
   ('Algodão'),
   ('Café'),
   ('Cana de Açucar');
