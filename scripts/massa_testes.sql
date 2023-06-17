 
do $$
  declare i integer;
  declare r record; 
  declare cultura_record record;
  declare perc numeric(15,6);
  declare total numeric(15,6);
  declare vegetacao numeric(15,6);
  declare agricultavel numeric(15,6);
  
  declare total_loops integer = 1; 
  declare cnpj_cpf varchar(14);
  declare n integer; 
  declare id integer; 
  declare c integer; 
  
begin

	delete from produtor_cultura;
    delete from produtor;
    alter sequence seq_pro_id restart with 1;


  for r in select loc_id, loc_nome from localidade l 
  loop
  	i = 0;


  	while i < total_loops  
	loop
		
		perc = (SELECT (random() * 100 + 1))::numeric(15,2);
	    total = (SELECT (random() * 10000 + 1))::numeric(15,2); 
	    agricultavel = (total * perc / 100)::numeric(15,2);
	    vegetacao = total - agricultavel;
	   
	   
	    if (i % 2) = 0 then 
	   	  n = 11; 
	   	else 
	   	  n = 14; 
	   	end if;
	    
	     
	    cnpj_cpf = substring(  regexp_replace((random() * 10000 + 1)::text,'\D','','g')   from 1 for n);
	    
	    id = nextval('seq_pro_id'); 
		
        insert into produtor(pro_id, pro_cnpj_cpf, pro_nome,  pro_fazenda, pro_localidade, pro_area_agricultavel, pro_area_vegetacao, pro_area_total)
        values(id, cnpj_cpf, 'Nome ' || i::text || ' ' || r.loc_nome , 'Fazenda ' || i::text || ' ' || r.loc_nome, r.loc_id, agricultavel, vegetacao, total );
       
        for cultura_record in select cul_id from cultura limit floor( random() * 4 + 1) 
        loop
            insert into produtor_cultura (proc_produtor, proc_cultura)
	        values (id, cultura_record.cul_id);
        end loop;
		
		i = i + 1;
		
	end loop;


  end loop;
	
end $$
