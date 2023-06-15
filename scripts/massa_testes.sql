 
do $$
  declare i integer;
  declare r record; 
  declare perc numeric(15,6);
  declare total numeric(15,6);
  declare vegetacao numeric(15,6);
  declare agricultavel numeric(15,6);
  
  declare total_loops integer = 10000; 
 
  
begin

delete from produtor;


  for r in select loc_id, loc_nome from localidade l 
  loop
  	i = 1;


  	while i < total_loops  
	loop
		
		
		perc = (SELECT (random() * 100 + 1))::numeric(15,2);
	    total = (SELECT (random() * 10000 + 1))::numeric(15,2); 
	    agricultavel = (total * perc / 100)::numeric(15,2);
	    vegetacao = total - agricultavel;
		
        insert into produtor(pro_nome, pro_fazenda, pro_localidade, pro_area_agricultavel, pro_area_vegetacao, pro_area_total)
         values('Nome ' || i::text || ' ' || r.loc_nome , 'Fazenda ' || i::text || ' ' || r.loc_nome, r.loc_id, agricultavel, vegetacao, total );
		
		i = i + 1;
		
	end loop;


  end loop;
	
end $$