import { Function, FunctionProps } from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';

export class TesteProjenCdk extends Function {
  constructor(scope: Construct, id: string, props: FunctionProps) {

    super(scope, id, {
      code: props.code,
      runtime: props.runtime,
      handler: props.handler,
    });
  }
}