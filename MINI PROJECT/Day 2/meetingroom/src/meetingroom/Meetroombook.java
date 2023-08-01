package meetingroom;

import java.sql.*;
import java.util.*;
import java.sql.Date;

// Encapsulation: Create classes to encapsulate related data and functionality
class Room {
    private int roomId;
    private String roomName;
    private int capacity;

    public Room(int roomId, String roomName, int capacity) {
        this.roomId = roomId;
        this.roomName = roomName;
        this.capacity = capacity;
    }

    // Getters and setters for private fields
    public int getRoomId() {
        return roomId;
    }

    public void setRoomId(int roomId) {
        this.roomId = roomId;
    }

    public String getRoomName() {
        return roomName;
    }

    public void setRoomName(String roomName) {
        this.roomName = roomName;
    }

    public int getCapacity() {
        return capacity;
    }

    public void setCapacity(int capacity) {
        this.capacity = capacity;
    }
}

class Request {
    private int requestId;
    private String requestTitle;
    private Date requestDate;
    private String requestDuration;

    public Request(int requestId, String requestTitle, Date requestDate, String requestDuration) {
        this.requestId = requestId;
        this.requestTitle = requestTitle;
        this.requestDate = requestDate;
        this.requestDuration = requestDuration;
    }

    // Getters and setters for private fields
    public int getRequestId() {
        return requestId;
    }

    public void setRequestId(int requestId) {
        this.requestId = requestId;
    }

    public String getRequestTitle() {
        return requestTitle;
    }

    public void setRequestTitle(String requestTitle) {
        this.requestTitle = requestTitle;
    }

    public Date getRequestDate() {
        return requestDate;
    }

    public void setRequestDate(Date requestDate) {
        this.requestDate = requestDate;
    }

    public String getRequestDuration() {
        return requestDuration;
    }

    public void setRequestDuration(String requestDuration) {
        this.requestDuration = requestDuration;
    }
}

class Equipment {
    private int equipmentId;
    private String equipmentName;
    private int equipmentCapacity;
    private String roomName;

    public Equipment(int equipmentId, String equipmentName, int equipmentCapacity, String roomName) {
        this.equipmentId = equipmentId;
        this.equipmentName = equipmentName;
        this.equipmentCapacity = equipmentCapacity;
        this.roomName = roomName;
    }

    // Getters and setters for private fields
    public int getEquipmentId() {
        return equipmentId;
    }

    public void setEquipmentId(int equipmentId) {
        this.equipmentId = equipmentId;
    }

    public String getEquipmentName() {
        return equipmentName;
    }

    public void setEquipmentName(String equipmentName) {
        this.equipmentName = equipmentName;
    }

    public int getEquipmentCapacity() {
        return equipmentCapacity;
    }

    public void setEquipmentCapacity(int equipmentCapacity) {
        this.equipmentCapacity = equipmentCapacity;
    }

    public String getRoomName() {
        return roomName;
    }

    public void setRoomName(String roomName) {
        this.roomName = roomName;
    }
}

// Abstraction: Use interfaces to define abstract behavior
interface MeetingRoom {
    void addRoomDetails(Room room) throws Exception;

    Room displayRoomDetails(int roomId) throws Exception;
}

interface RequestHandler {
    void addRequestDetails(Request request) throws Exception;

    Request displayRequestDetails(int requestId) throws Exception;

    List<Room> findAvailableRooms(int requiredCapacity, String roomName, String requestTitle) throws Exception;
}

interface EquipmentHandler {
    void addEquipmentDetails(Equipment equipment) throws Exception;

    Equipment displayEquipmentDetails(int equipmentId) throws Exception;

    List<Equipment> findAvailableEquipments(String roomName, int requiredEquipmentCapacity) throws Exception;
}

// Inheritance and Polymorphism: Implement interfaces and inherit common functionality
public class Meetroombook implements MeetingRoom, RequestHandler, EquipmentHandler {

    private String url = "jdbc:mysql://localhost/meetroom";
    private String user = "root";
    private String pass = "Sw@thi@2003!";
    private Connection con;

    public Meetroombook() throws Exception {
        con = DriverManager.getConnection(url, user, pass);
    }

    // Room Methods
    @Override
    public void addRoomDetails(Room room) throws Exception {
        String query = "INSERT INTO room VALUES(?,?,?)";
        PreparedStatement st = con.prepareStatement(query);
        st.setInt(1, room.getRoomId());
        st.setString(2, room.getRoomName());
        st.setInt(3, room.getCapacity());
        st.execute();

        System.out.println("DATA ADDED!");
    }

    @Override
    public Room displayRoomDetails(int roomId) throws Exception {
        String query_display = "SELECT * FROM room WHERE room_id=?";
        PreparedStatement st_display = con.prepareStatement(query_display);
        st_display.setInt(1, roomId);
        ResultSet rs_display = st_display.executeQuery();

        while (rs_display.next()) {
            int room_id = rs_display.getInt(1);
            String room_name = rs_display.getString(2);
            int capacity = rs_display.getInt(3);
            return new Room(room_id, room_name, capacity);
        }

        return null;
    }

    // Request Methods
    @Override
    public void addRequestDetails(Request request) throws Exception {
        String query_add = "INSERT INTO requests VALUES(?,?,?,?)";
        PreparedStatement st_add = con.prepareStatement(query_add);
        st_add.setInt(1, request.getRequestId());
        st_add.setString(2, request.getRequestTitle());
        st_add.setDate(3, request.getRequestDate());
        st_add.setString(4, request.getRequestDuration());
        st_add.execute();

        System.out.println("DATA ADDED!");
    }

    @Override
    public Request displayRequestDetails(int requestId) throws Exception {
        String query_display = "SELECT * FROM requests WHERE req_id=?";
        PreparedStatement st_display = con.prepareStatement(query_display);
        st_display.setInt(1, requestId);
        ResultSet rs_display = st_display.executeQuery();

        while (rs_display.next()) {
            int req_id = rs_display.getInt(1);
            String req_title = rs_display.getString(2);
            Date book_date = rs_display.getDate(3);
            String duration = rs_display.getString(4);
            return new Request(req_id, req_title, book_date, duration);
        }

        return null;
    }

    @Override
    public List<Room> findAvailableRooms(int requiredCapacity, String roomName, String requestTitle) throws Exception {
        String query_alloc = "SELECT * FROM room LEFT JOIN requests ON room.room_name = requests.req_title WHERE room.capacity >= ? AND room.room_name = ?";
        PreparedStatement st_alloc = con.prepareStatement(query_alloc);
        st_alloc.setInt(1, requiredCapacity);
        st_alloc.setString(2, roomName);

        ResultSet rs_alloc = st_alloc.executeQuery();
        List<Room> availableRooms = new ArrayList<>();
        
        while (rs_alloc.next()) {
            if (rs_alloc.getString("req_title") == null || rs_alloc.getString("req_title").equals(requestTitle)) {
                int room_id = rs_alloc.getInt("room_id");
                String room_name = rs_alloc.getString("room_name");
                int capacity = rs_alloc.getInt("capacity");
                availableRooms.add(new Room(room_id, room_name, capacity));
            }
        }

        return availableRooms;
    }

    // Equipment Methods
    @Override
    public void addEquipmentDetails(Equipment equipment) throws Exception {
        String query_equip = "INSERT INTO equipments VALUES(?,?,?,?)";
        PreparedStatement st_equip = con.prepareStatement(query_equip);
        st_equip.setInt(1, equipment.getEquipmentId());
        st_equip.setString(2, equipment.getEquipmentName());
        st_equip.setInt(3, equipment.getEquipmentCapacity());
        st_equip.setString(4, equipment.getRoomName());
        st_equip.execute();

        System.out.println("DATA ADDED!");
    }

    @Override
    public Equipment displayEquipmentDetails(int equipmentId) throws Exception {
        String query_display = "SELECT * FROM equipments WHERE equip_id=?";
        PreparedStatement st_display = con.prepareStatement(query_display);
        st_display.setInt(1, equipmentId);
        ResultSet rs_display = st_display.executeQuery();

        while (rs_display.next()) {
            int equip_id = rs_display.getInt(1);
            String equip_name = rs_display.getString(2);
            int equip_cap = rs_display.getInt(3);
            String room_name = rs_display.getString(4);
            return new Equipment(equip_id, equip_name, equip_cap, room_name);
        }

        return null;
    }

    @Override
    public List<Equipment> findAvailableEquipments(String roomName, int requiredEquipmentCapacity) throws Exception {
        String query_allot = "SELECT * FROM equipments WHERE room_name=? AND equip_cap >= ?";
        PreparedStatement st_allot = con.prepareStatement(query_allot);
        st_allot.setString(1, roomName);
        st_allot.setInt(2, requiredEquipmentCapacity);

        ResultSet rs_allot = st_allot.executeQuery();
        List<Equipment> availableEquipments = new ArrayList<>();

        while (rs_allot.next()) {
            int equip_id = rs_allot.getInt("equip_id");
            String equip_name = rs_allot.getString("equip_name");
            int equip_cap = rs_allot.getInt("equip_cap");
            String equip_room_name = rs_allot.getString("room_name");
            availableEquipments.add(new Equipment(equip_id, equip_name, equip_cap, equip_room_name));
        }

        return availableEquipments;
    }

    public static void main(String[] args) throws Exception {
        Scanner sc = new Scanner(System.in);
        int op;

        System.out.println("CHOOSE DETAILS CATEGORY:");
        System.out.println("1 => ROOM DETAILS");
        System.out.println("2 => REQUEST DETAILS");
        System.out.println("3 => EQUIPMENT DETAILS");

        int categoryChoice = sc.nextInt();

        Meetroombook meetingRoomManager = new Meetroombook();

        if (categoryChoice == 1) {
            
        	System.out.println("CHOOSE AN OPTION:");
            System.out.println("1 => ADD ROOM DETAILS");
            System.out.println("2 => DISPLAY ROOM DETAILS");
            System.out.println("8 => EXIT");

            op = sc.nextInt();

            switch (op) {
                case 1:
                    System.out.println("ROOM DETAILS:");
                    System.out.println("Enter the room id:");
                    int room_id = sc.nextInt();
                    System.out.println("Enter the room name:");
                    String room_name = sc.next();
                    System.out.println("Enter the capacity:");
                    int capacity = sc.nextInt();
                    meetingRoomManager.addRoomDetails(new Room(room_id, room_name, capacity));
                    break;
                case 2:
                    System.out.println("Enter the room id you want to be displayed:");
                    int room_id_display = sc.nextInt();
                    Room room = meetingRoomManager.displayRoomDetails(room_id_display);
                    if (room != null) {
                    	System.out.println("Room Id : " + room.getRoomId());
                        System.out.println("Room Name : " + room.getRoomName());
                        System.out.println("Room capacity : " + room.getCapacity());
                    } else {
                    System.out.println("INVALID ID");
                    }
                break;
                case 8:
                System.out.println("EXITING...");
                break;
            default:
                System.out.println("INVALID OPTION. PLEASE CHOOSE A VALID OPTION");
            }
        	
        } 
        else if (categoryChoice == 2) {
            
        	System.out.println("CHOOSE AN OPTION:");
            System.out.println("1 => ADD REQUEST DETAILS");
            System.out.println("2 => DISPLAY REQUEST DETAILS");
            System.out.println("3 => FIND AVAILABLE ROOMS FOR REQUEST");
            System.out.println("8 => EXIT");

            op = sc.nextInt();

            switch (op) {
                case 1:
                    System.out.println("REQUEST DETAILS:");
                    System.out.println("Enter the request id:");
                    int req_id = sc.nextInt();
                    System.out.println("Enter the request title:");
                    String req_title_add = sc.next();
                    System.out.println("Enter the request date (yyyy-MM-dd):");
                    String book_date = sc.next();
                    Date dob = Date.valueOf(book_date);
                    System.out.println("Enter the request duration:");
                    String duration = sc.next();
                    meetingRoomManager.addRequestDetails(new Request(req_id, req_title_add, dob, duration));
                    break;
                    
                case 2:
                    System.out.println("Enter the id you want to be displayed:");
                    int req_id_display = sc.nextInt();
                    Request request = meetingRoomManager.displayRequestDetails(req_id_display);
                    if (request != null) {
                        System.out.println("Request Id : " + request.getRequestId());
                        System.out.println("Request Title : " + request.getRequestTitle());
                        System.out.println("Request Date : " + request.getRequestDate());
                        System.out.println("Request Duration : " + request.getRequestDuration());
                    } else {
                        System.out.println("INVALID ID");
                    }
                    break;
                case 3:
                    System.out.println("Enter the requested capacity:");
                    int req_cap_alloc = sc.nextInt();
                    System.out.println("Enter the room name:");
                    String room_name_alloc = sc.next();
                    System.out.println("Enter the request title:");
                    String req_title = sc.next();
                    List<Room> availableRooms = meetingRoomManager.findAvailableRooms(req_cap_alloc, room_name_alloc, req_title);
                    if (!availableRooms.isEmpty()) {
                        System.out.println("Available Rooms for Request:");
                        for (Room room : availableRooms) {
                            System.out.println("Room Id: " + room.getRoomId());
                            System.out.println("Room Name: " + room.getRoomName());
                            System.out.println("Capacity: " + room.getCapacity());
                        }
                    } else {
                        System.out.println("NO AVAILABLE ROOMS WITH THE REQUESTED CAPACITY OR REQUESTED TITLE.");
                    }
                    break;
                case 8:
                    System.out.println("EXITING...");
                    break;
                default:
                    System.out.println("INVALID OPTION. PLEASE CHOOSE A VALID OPTION");
            }
        	
        } else if (categoryChoice == 3) {
            //Equipment details
        	do {
                System.out.println("CHOOSE AN OPTION:");
                System.out.println("1 => ADD EQUIPMENT DETAILS");
                System.out.println("2 => DISPLAY EQUIPMENT DETAILS");
                System.out.println("3 => ALLOCATE EQUIPMENTS");
                System.out.println("8 => EXIT");

                op = sc.nextInt();

                switch (op) {
                    case 1:
                        System.out.println("EQUIPMENT DETAILS:");
                        System.out.println("Enter the equipment id:");
                        int equip_id = sc.nextInt();
                        System.out.println("Enter the equipment name:");
                        String equip_name = sc.next();
                        System.out.println("Enter the equipment capacity:");
                        int equip_cap = sc.nextInt();
                        System.out.println("Enter the room name:");
                        String room_name = sc.next();
                        Equipment newEquipment = new Equipment(equip_id, equip_name, equip_cap, room_name);
                        meetingRoomManager.addEquipmentDetails(newEquipment);
                        break;
                    case 2:
                        System.out.println("Enter the id you want to be displayed:");
                        int equip_id_display = sc.nextInt();
                        if (equip_id_display > 0) {
                            Equipment displayedEquipment = meetingRoomManager.displayEquipmentDetails(equip_id_display);
                            if (displayedEquipment != null) {
                                System.out.println("Equipment Id : " + displayedEquipment.getEquipmentId());
                                System.out.println("Equipment Name : " + displayedEquipment.getEquipmentName());
                                System.out.println("Equipment Capacity : " + displayedEquipment.getEquipmentCapacity());
                                System.out.println("Room Name : " + displayedEquipment.getRoomName());
                            } else {
                                System.out.println("EQUIPMENT NOT FOUND WITH THE GIVEN ID.");
                            }
                        } else {
                            System.out.println("INVALID ID");
                        }
                        break;
                    case 3:
                    	System.out.println("Enter the room name:");
                        String room_name_allot = sc.next();
                        System.out.println("Enter the required equipment capacity:");
                        int req_equip_capacity = sc.nextInt();
                        System.out.println("Enter the required equipment name:");
                        String req_equip_name = sc.next();

                        // Call the method to find available equipments based on the specified criteria
                        List<Equipment> availableEquipments = meetingRoomManager.findAvailableEquipments(room_name_allot, req_equip_capacity);
                        List<Equipment> allocatedEquipments = new ArrayList<>();

                        for (Equipment equipment : availableEquipments) {
                            if (equipment.getEquipmentName().equalsIgnoreCase(req_equip_name)) {
                                // Allocate the equipment to the room and remove it from the available list
                                allocatedEquipments.add(equipment);
                                availableEquipments.remove(equipment);
                                System.out.println("EQUIPMENT " + equipment.getEquipmentName() + " ALLOCATED TO ROOM " + equipment.getRoomName());
                                break;
                            }
                        }
                        if (allocatedEquipments.isEmpty()) {
                            System.out.println("NO AVAILABLE EQUIPMENT WITH THE REQUIRED NAME AND CAPACITY IN THE SPECIFIED ROOM.");
                        }

                        break;
                    case 8:
                        System.out.println("EXITING...");
                        break;
                    default:
                        System.out.println("INVALID OPTION. PLEASE CHOOSE A VALID OPTION");
                }
            } while (op != 8);
	
        } else {
            System.out.println("INVALID CATEGORY CHOISE. PLEASE CHOOSE A VALID CATEGORY.");
        }

        meetingRoomManager.closeConnection();
    }

    public void closeConnection() throws SQLException {
        con.close();
    }
}
