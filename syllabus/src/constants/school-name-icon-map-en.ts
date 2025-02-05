import fseIcon from "../assets/img/syllabus-icons/fse.png";
import cseIcon from "../assets/img/syllabus-icons/cse.png";
import aseIcon from "../assets/img/syllabus-icons/ase.png";
import pseIcon from "../assets/img/syllabus-icons/pse.png";
import silsIcon from "../assets/img/syllabus-icons/sils.png";
import sssIcon from "../assets/img/syllabus-icons/sss.png";
import humIcon from "../assets/img/syllabus-icons/hum.png";
import lawIcon from "../assets/img/syllabus-icons/law.png";
import spsIcon from "../assets/img/syllabus-icons/sps.png";
import cmsIcon from "../assets/img/syllabus-icons/cms.png";
import hssIcon from "../assets/img/syllabus-icons/hss.png";
import socIcon from "../assets/img/syllabus-icons/soc.png";
import eduIcon from "../assets/img/syllabus-icons/edu.png";

import gPsIcon from "../assets/img/syllabus-icons/g_ps.png";
import gEIcon from "../assets/img/syllabus-icons/g_e.png";
import gLawIcon from "../assets/img/syllabus-icons/g_law.png";
import gLasIcon from "../assets/img/syllabus-icons/g_las.png";
import gScIcon from "../assets/img/syllabus-icons/g_sc.png";
import gEduIcon from "../assets/img/syllabus-icons/g_edu.png";
import gHumIcon from "../assets/img/syllabus-icons/g_hum.png";
import gSssIcon from "../assets/img/syllabus-icons/g_sss.png";
import gSapsIcon from "../assets/img/syllabus-icons/g_saps.png";
import gItsIcon from "../assets/img/syllabus-icons/g_its.png";
import gSjalIcon from "../assets/img/syllabus-icons/g_sjal.png";
import gIpsIcon from "../assets/img/syllabus-icons/g_ips.png";
import gWlsIcon from "../assets/img/syllabus-icons/g_wls.png";
import gSaIcon from "../assets/img/syllabus-icons/g_sa.png";
import gSpsIcon from "../assets/img/syllabus-icons/g_sps.png";
import gFseIcon from "../assets/img/syllabus-icons/g_fse.png";
import gCseIcon from "../assets/img/syllabus-icons/g_cse.png";
import gAseIcon from "../assets/img/syllabus-icons/g_ase.png";
import gSeeeIcon from "../assets/img/syllabus-icons/g_seee.png";
import gSiccsIcon from "../assets/img/syllabus-icons/g_siccs.png";
import gWbsIcon from "../assets/img/syllabus-icons/g_wbs.png";

import artIcon from "../assets/img/syllabus-icons/art.png";
import cjlIcon from "../assets/img/syllabus-icons/cjl.png";
import cieIcon from "../assets/img/syllabus-icons/cie.png";
import gecIcon from "../assets/img/syllabus-icons/gec.png";

enum School {
  SILS = "SILS",
  PSE = "PSE",
  SSS = "SSS",
  FSE = "FSE",
  ASE = "ASE",
  CSE = "CSE",
  LAW = "LAW",
  CMS = "CMS",
  HSS = "HSS",
  EDU = "EDU",
  SOC = "SOC",
  HUM = "HUM",
  SPS = "SPS",
  G_ASE = "G_ASE",
  G_CSE = "G_CSE",
  G_EDU = "G_EDU",
  G_FSE = "G_FSE",
  G_SAPS = "G_SAPS",
  G_ITS = "G_ITS",
  G_SA = "G_SA",
  G_SC = "G_SC",
  G_E = "G_E",
  G_SJAL = "G_SJAL",
  G_SICCS = "G_SICCS",
  G_PS = "G_PS",
  G_SSS = "G_SSS",
  G_HUM = "G_HUM",
  G_IPS = "G_IPS",
  G_LAS = "G_LAS",
  G_LAW = "G_LAW",
  G_SPS = "G_SPS",
  G_WBS = "G_WBS",
  G_WLS = "G_WLS",
  G_SEEE = "G_SEEE",
  ART = "ART",
  CJL = "CJL",
  CIE = "CIE",
  GEC = "GEC"
}

export const undergradSchoolNameIconMap = {
  [School.SILS]: silsIcon,
  [School.PSE]: pseIcon,
  [School.SSS]: sssIcon,
  [School.FSE]: fseIcon,
  [School.CSE]: cseIcon,
  [School.ASE]: aseIcon,
  [School.LAW]: lawIcon,
  [School.CMS]: cmsIcon,
  [School.HSS]: hssIcon,
  [School.EDU]: eduIcon,
  [School.SOC]: socIcon,
  [School.HUM]: humIcon,
  [School.SPS]: spsIcon,
};

export const gradSchoolNameIconMap = {
  [School.G_PS]: gPsIcon,
  [School.G_E]: gEIcon,
  [School.G_LAW]: gLawIcon,
  [School.G_LAS]: gLasIcon,
  [School.G_SC]: gScIcon,
  [School.G_EDU]: gEduIcon,
  [School.G_HUM]: gHumIcon,
  [School.G_SSS]: gSssIcon,
  [School.G_SAPS]: gSapsIcon,
  [School.G_ITS]: gItsIcon,
  [School.G_SJAL]: gSjalIcon,
  [School.G_IPS]: gIpsIcon,
  [School.G_WLS]: gWlsIcon,
  [School.G_SA]: gSaIcon,
  [School.G_SPS]: gSpsIcon,
  [School.G_FSE]: gFseIcon,
  [School.G_CSE]: gCseIcon,
  [School.G_ASE]: gAseIcon,
  [School.G_SEEE]: gSeeeIcon,
  [School.G_SICCS]: gSiccsIcon,
  [School.G_WBS]: gWbsIcon,
};

export const otherSchoolNameIconMap = {
  [School.CJL]: cjlIcon,
  [School.GEC]: gecIcon,
  [School.CIE]: cieIcon,
  [School.ART]: artIcon,
};

export const allSchoolNameIconMap = {
  ...undergradSchoolNameIconMap,
  ...gradSchoolNameIconMap,
  ...otherSchoolNameIconMap,
};

export default allSchoolNameIconMap;