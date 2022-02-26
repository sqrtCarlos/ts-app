import { APIGatewayProxyEvent } from 'aws-lambda';
import { LambdaResponse } from '../types/types';


export const hello = async (event: APIGatewayProxyEvent): Promise<LambdaResponse> => {
  return {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Hello world, this is Carlos and this function was executed successfully!"        
      },
      null,
      2
    ),
  };
};
