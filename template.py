#!/usr/bin/python

from string import Template
from subprocess import call
import sys

def _gen_template():
  
  source_filename = sys.argv[1]
  destination_filename = '{0}.ts'.format(source_filename)

  source_file = open(source_filename, 'r')
  source = source_file.read()
  source_file.close()

  source = ''.join(source.splitlines());
  source = source.replace('\'', '\\\'')

  generated = 'export function getHtml(): string {{ return \'{0}\'; }}'.format(source)

  output_file = open(destination_filename, 'w')
  output_file.write(generated)
  output_file.close()

  call('/usr/local/bin/tsc {0} --module amd'.format(destination_filename), shell=True)

_gen_template()