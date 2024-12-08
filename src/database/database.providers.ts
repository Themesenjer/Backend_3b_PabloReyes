import { ConfigService } from "src/config/config.service";
import { DataSource } from "typeorm"

export  const databaseProvider=[
    {
        provide: 'DATABASE_CONNECTION',
        inject:[ConfigService],
        useFactory:(config: ConfigService)=>{
            const dataSource=new DataSource({
                type:'postgres',
                host:config.get('HOST'),
                port:+config.get('PORT_DB'),
                username:config.get('USERNAME'),
                password:config.get('PASSWORD_DB'),
                database:config.get('DATABASE'),
                entities: [
                    __dirname + '/../**/*.entity{.ts,.js}',
                ],

            });
            return dataSource.initialize();
        }
    }
]