switch (process.arch) {
  case 'x64':
    require('./lib.x64.node');
    break;
  case 'ia32':
    require('./lib.Win32.node');
    break;
  default:
    throw new Error('Unsupported process.arch:', process.arch);
}
