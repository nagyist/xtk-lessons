window.onload = function() {
  
  // the DICOM files
  //
  // this is a brain MR with dimensions 26x256x148 vx
  // some slices were removed to get the 'look-into-the-brain' effect
  var _dicom = ['53320924', '53321068', '53322843', '53322987', '53323131',
                '53323275', '53323419', '53323563', '53323707', '53323851',
                '53323995', '53324139', '53324283', '53325471', '53325615',
                '53325759', '53325903', '53320940', '53321084', '53322859',
                '53323003', '53323147', '53323291', '53323435', '53323579',
                '53323723', '53323867', '53324011', '53324155', '53324299',
                '53325487', '53325631', '53325775', '53325919', '53320956',
                '53322731', '53322875', '53323019', '53323163', '53323307',
                '53323451', '53323595', '53323739', '53323883', '53324027',
                '53324171', '53324315', '53325503', '53325647', '53325791',
                '53325935', '53320972', '53322747', '53322891', '53323035',
                '53323179', '53323323', '53323467', '53323611', '53323755',
                '53323899', '53324043', '53324187', '53325375', '53325519',
                '53325663', '53325807', '53325951', '53320988', '53322763',
                '53322907', '53323051', '53323195', '53323339', '53323483',
                '53323627', '53323771', '53323915', '53324059', '53324203',
                '53325391', '53325535', '53325679', '53325823', '53321004',
                '53322779', '53322923', '53323067', '53323211', '53323355',
                '53323499', '53323643', '53323787', '53323931', '53324075',
                '53324219', '53325407', '53325551', '53325695', '53325839',
                '53321020', '53322795', '53322939', '53323083', '53323227',
                '53323371', '53323515', '53323659', '53323803', '53323947',
                '53324091', '53324235', '53325423', '53325567', '53325711',
                '53325855', '53321036', '53322811', '53322955', '53323099',
                '53323243', '53323387', '53323531', '53323675', '53323819',
                '53323963', '53324107', '53324251', '53325439', '53325583',
                '53325727', '53325871', '53321052', '53322827', '53322971',
                '53323115', '53323259', '53323403', '53323547', '53323691',
                '53323835', '53323979', '53324123', '53324267', '53325455',
                '53325599', '53325743', '53325887'];
  


  // create a new test_renderer
  var r = new X.renderer3D();
  // r.bgColor = [0.2, 0.25, 0.4];
  r.init();
  r.camera.position = [0, 300, 0];
  
  // we create the X.volume container and attach all DICOM files
  var v = new X.volume();
  // map the data url to each of the slices
  v.file = _dicom.sort().map(function(v) {

    // we also add the 'fake' .DCM extension since else wise
    // XTK would think .org is the extension
    return 'https://fly.cs.umb.edu/data/X/mybrain/' + v + '.dcm';
    
  });
  
  // add the volume
  r.add(v);
  
  // .. and render it
  r.render();
  
  r.onShowtime = function() {

    // activate volume rendering
    v.volumeRendering = true;
    v.lowerThreshold = 80;
    v.windowLower = 115;
    v.windowHigh = 360;
    v.minColor = [0, 0.06666666666666667, 1];
    v.maxColor = [0.5843137254901961, 1, 0];
    v.opacity = 0.2;
    
  };
  
  volume = v;
  
};
